import asyncHandler from "express-async-handler";
import contact from "../model/userModel.js";
contact.sync();

const getContacts = (req, res) => {
  // Find all contacts
  contact.findAll().then((contact) => {
    res.send({ contacts: contact });
  });
};

// Create Contact

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  let cont = contact.build({ name: name, email: email, phone: phone });
  cont.save().then((data) => {
    res.send({
      contact: data,
    });
  });
});

// Get Single Contact

const getSingleContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await contact.findByPk(id).then((contact) => {
    if (contact) {
      res.send({
        contact: contact,
      });
    } else {
      res.status(404);
      throw new Error("Contact not found");
    }
  });
});

// delete the contact
const deleteContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  contact.destroy({
    where: {
      id: id,
    },
  });
  res.send({ message: "Contact deleted" });
});

// update the contact

const updateContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
console.log(req.body)
  // find the contact
  await contact.findByPk(id).then((contact) => {
    if (contact) {
      contact.update(
        {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
        },
        {
          where: {
            id: id,
          },
        }
      )
      .then((contact) => {
        res.send({ message: "Contact updated", contact: contact});
      });
    } else {
      res.status(404);
      throw new Error("Contact not found");
    }
  });
});

export {
  getContacts,
  createContact,
  getSingleContact,
  deleteContact,
  updateContact,
};
