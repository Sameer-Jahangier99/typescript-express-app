import { Request, Response } from 'express';
import * as resourceService from '../services/resourceService';
import { listResourcesSchema, resourceSchema } from '../validators/resourceValidator';
import { createNotFoundError, createCustomError } from '../utils/CustomError';
import  asyncHandler from '../middleware/asyncHandler'

// Create a new resource
export const createResource = asyncHandler(async (req: Request, res: Response) => {
    const { error } = resourceSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorMessages = error.details.map((err) => err.message);
        throw createCustomError(400, errorMessages.join(', '));
    }

    const resource = await resourceService.createResource(req.body);
    res.status(201).json(resource);
});

// Get a specific resource by ID
export const getResource = asyncHandler(async (req: Request, res: Response) => {
    const resource = await resourceService.getResource(req.params.id);
    if (!resource) {
      throw createNotFoundError('Resource not found');
    }
    res.json(resource);
});

// List all resources with optional filters
export const listResources = asyncHandler(async (req: Request, res: Response) => {
    const { error } = listResourcesSchema.validate(req.query);
    if (error) {
        throw createCustomError(400, error.details.map(err => err.message).join(', '));
    }
    const { name, sort, page = '1', limit = '10' } = req.query;
  
    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);
  
    const { resources, total } = await resourceService.listResources(
      name as string,
      sort as string,
      pageNumber,
      pageSize
    );
  
    if (resources.length === 0) {
      throw createCustomError(404, 'No such product found');
    }
  
    res.json({
      total,
      page: pageNumber,
      limit: pageSize,
      resources,
    });
  });

// Update a specific resource by ID
export const updateResource = asyncHandler (async (req: Request, res: Response) => {
    const resource = await resourceService.updateResource(req.params.id, req.body);
    if (!resource) {
      throw createNotFoundError('Resource not found');
    }
    res.json(resource);
    throw createCustomError(500, 'Internal Server Error');
});

// Soft delete a resource by setting isDeleted to true
export const deleteResource = asyncHandler (async (req: Request, res: Response) => {
    const resource = await resourceService.updateResource(req.params.id, { isDeleted: true });
    if (!resource) {
      throw createNotFoundError('Resource not found');
    }
    res.sendStatus(204);
    throw createCustomError(500, 'Internal Server Error');
});
