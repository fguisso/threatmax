import Router from 'koa-router';
import { ThreatModelService } from '../../services/threatModelService';
import { IThreatModelData, IThreatModelFilter } from '../../domain/threatModel';

const router = new Router();

// Instantiate the service
const threatModelService = new ThreatModelService();

// POST /threat-model - Create a new threat model
router.post('/', async (ctx) => {
    const threatModelData = ctx.request.body as IThreatModelData;
    ctx.body = await threatModelService.createThreatModel(threatModelData);
    ctx.status = 201;
});

// GET /threat-model/:id - Retrieve a specific threat model
router.get('/:id', async (ctx) => {
    const { id } = ctx.params;
    ctx.body = { id };
    ctx.status = 200;
    ctx.body = await threatModelService.getThreatModelById(id);
});

// PUT /threat-model/:id - Update a specific threat model
router.put('/:id', async (ctx) => {
    const { id } = ctx.params;
    const updateData = ctx.request.body as IThreatModelData;
    ctx.body = { id, updateData };
    ctx.status = 200;
    ctx.body = await threatModelService.updateThreatModel(id, updateData);
});

// DELETE /threat-model/:id - Delete a specific threat model
router.delete('/:id', async (ctx) => {
    const { id } = ctx.params;
    await threatModelService.deleteThreatModel(id);
    ctx.status = 204;
});

// GET /threat-model - List all threat models
router.get('/', async (ctx) => {
    const { query, page, limit } = ctx.query;
    const parsedPage = Number(page ? page : 1);
    const parsedLimit = Number(limit ? limit : 10);
    if (query) {
        const threatModels = await threatModelService.searchThreatModels(query as IThreatModelFilter, parsedPage, parsedLimit);
        ctx.body = threatModels;
        ctx.status = 200;
    } else {
        ctx.body = await threatModelService.listThreatModels(parsedPage, parsedLimit);
        ctx.status = 200;
    }
});

export default router;