import { PAGINATION, RESPONSE_MESSAGE } from "../constants.js";
import { ChatThiOnline } from "../model/ChatThiOnline.js";
import { Information } from "../model/Information.js";

export const createChat = async (req, res) => {
  try {
    const newChat = new ChatThiOnline({
      nguoidung: Number(req.body.nguoidung),
      noidung: req.body.noidung,
      box: Number(req.body.box),
      time: new Date(new Date().toString()),
    });

    await newChat.save().then(async (data) => {
      const info = await Information.findOne({ uid: data.nguoidung });
      return res.status(200).json({
        status: RESPONSE_MESSAGE.SUCCESS,
        message: { ...data, info },
      });
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: RESPONSE_MESSAGE.ERROR, message: err.message });
  }
};

export const getChatOfBox = async (req, res) => {
  const page = Number(req.query.page);
  return await ChatThiOnline.find({ box: Number(req.params.box) })
    .sort({ uid: 1 })
    .skip(PAGINATION * page - PAGINATION)
    .limit(PAGINATION)
    .populate({ path: "info", model: Information })
    .then((data) =>
      res.status(200).json({ status: RESPONSE_MESSAGE.SUCCESS, message: data })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ status: RESPONSE_MESSAGE.ERROR, message: err.message })
    );
};
