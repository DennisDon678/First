import express from 'express';
import { 
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getSingleContact } from '../controllers/contactController.js';


const route = express.Router();

route.get('/', getContacts);

route.post('/', createContact);

route.get('/:id', getSingleContact);

route.delete('/:id',deleteContact);

route.put('/:id',updateContact);

export default route;