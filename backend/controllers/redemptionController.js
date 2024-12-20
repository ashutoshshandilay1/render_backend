import RedemptionRequest from '../models/RedemptionRequest.js';

export const createRedemptionRequest = async (req, res) => {
  try {
    const redemptionRequest = new RedemptionRequest({
      ...req.body,
      requestedAt: new Date(),
    });
    
    await redemptionRequest.save();
    
    res.status(201).json({
      success: true,
      message: 'Redemption request saved successfully',
      data: redemptionRequest,
    });
  } catch (error) {
    console.error('Error saving redemption request:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save redemption request',
      error: error.message,
    });
  }
};
