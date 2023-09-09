const express = require('express');
const mongoose = require('mongoose');





// Define API Routes
app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.post('/task', async (req, res) => {
    try {
      const task = new Task(req.body);
      const savedTask = await task.save();
      res.status(201).json(savedTask);
    } catch (err) {
      res.status(400).json({ error: 'Bad request' });
    }
  });
  
  app.put('/task/:id', async (req, res) => {
    const taskId = req.params.id;
    const newStatus = req.body.status;
  
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        { status: newStatus },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      res.json(updatedTask);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  