import { MongoClient } from 'mongodb';

// /api/new-meetup

async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body;    
    const mongo: any = process.env.MONGO
    const client: any = await MongoClient.connect(mongo);
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);

    client.close();
    res.status(201).json({message: 'Meetup Inserted!'});
  }
}

export default handler;