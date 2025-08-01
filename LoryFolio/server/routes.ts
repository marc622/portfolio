import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve attached assets (CVs, photos, etc.)
  app.use('/attached_assets', express.static(path.join(process.cwd(), 'attached_assets')));

  // put application routes here
  // prefix all routes with /api
  
  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
