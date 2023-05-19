import { Request, Response } from 'express';
import shortUrl from '../models/shortUrl.model';

const getIndexPage = async (req: Request, res: Response) => {
  res.send('Index Page');
};

const makeShortUrl = async (req: Request, res: Response) => {
  // get the longUrl from the req.body
  const { longUrl } = req.body;

  // create a short url
  const newUrl = await shortUrl.create({ longUrl });

  // return new shortened url
  return res.status(201).json(newUrl);
};

export default {
  makeShortUrl,
  getIndexPage,
};
