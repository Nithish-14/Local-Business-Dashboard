import { Request, Response } from 'express';

import { generateBusinessData, generateHeadline } from '../services/businessService';

export const getBusinessData = (req: Request, res: Response) => {
  const { name, location } = req.body;
  if (!name || !location) {
    res.status(400).json({ error: 'Name and location required' });
    return;
  }

  const data = generateBusinessData(name, location);
  res.json(data);
};

export const regenerateHeadline = (req: Request, res: Response) => {
  const { name, location } = req.query;
  if (typeof name !== 'string' || typeof location !== 'string') {
    res.status(400).json({ error: 'Name and location are required as query params' });
    return;
  }
  
  res.json({ headline: generateHeadline(name, location) });
};
