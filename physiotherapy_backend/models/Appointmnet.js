const { mongoose } = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true, // Ensure every appointment is linked to a user
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Cancelled'],
      default: 'Pending',
    },
    doctors: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//module.exports = mongoose.model('Appointment', appointmentSchema);

const Appointment = mongoose.model("Appointmnet", appointmentSchema);
module.exports = Appointment;
