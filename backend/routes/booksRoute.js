import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Save book
router.post('/', async (request, response) => {
    try {
        // Check if all required fields are present
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        // Create a new book instance
        const newBook = new Book({
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        });

        // Save the new book to the database
        const savedBook = await newBook.save();

        // Return the saved book
        return response.status(201).send(savedBook);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get All Books from Database
router.get('/',async(request,response)=>{
    try{
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// By id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        if (!book) {
            return response.status(404).send({ message: 'Book not found' });
        }

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Update a book

router.put('/:id', async(request, response)=>{
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        )  { 
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
         }

         const { id } = request.params;
         const result = await Book.findByIdAndUpdate(id, request.body);
         
         if(!result){
            return response.status(404).json({ message: 'Book update successfully' });
         }

         return response.status(200).send({message: 'Book update successfully'});
    } catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Delete a book
router.delete('/:id', async (request, response) => {
    console.log('Delete request received');
    try {
        const { id } = request.params;
        
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;