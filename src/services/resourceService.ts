import { Resource, IResource } from '../models/resourceModel';

export const createResource = async (resourceData: Omit<IResource, '_id'>) => {
  const resource = new Resource(resourceData);
  return await resource.save();
};

export const getResource = async (id: string) => {
  return await Resource.findById(id).exec();
};


export const listResources = async (name?: string, sort?: string, page: number = 1, limit: number = 10) => {
    let filter: any = { isDeleted: false };
    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }
  
    let sortOptions: any = {};
    if (sort) {
      sortOptions.createdAt = sort.toLowerCase() === 'desc' ? -1 : 1;
    }
  
    const resources = await Resource.find(filter)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  
    const total = await Resource.countDocuments(filter);
  
    return { resources, total };
  };

export const updateResource = async (id: string, resourceData: Partial<Omit<IResource, '_id'>>) => {
  return await Resource.findByIdAndUpdate(id, resourceData, { new: true }).exec();
};

export const deleteResource = async (id: string) => {
  return await Resource.findByIdAndDelete(id).exec();
};
