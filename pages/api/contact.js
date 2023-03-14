//contact ROUTE
import nc from "next-connect";
import ncoptions from "@/config/ncoptions";
import axios from "axios";

const handler = nc(ncoptions);

// MIDDLEWARE;
handler.use(async (req, res, next) => {
    next();
});

handler.post(async (req, res) => {
    const { data } = req.body;

    const { img_url, eventname, eventdescription } = data;

    try {
        //send data to google sheets

        res.status(200).json({ message: "success" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" });
    }
});

export default handler;
