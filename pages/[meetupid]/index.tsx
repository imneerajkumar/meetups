import MeetupDetail from '@/components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

function MeetupDetails(props: any) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta 
          name='description'
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail 
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const mongo: any = process.env.MONGO
  const client: any = await MongoClient.connect(mongo);
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup: { _id: { toString: () => any } }) => ({
      params: {
        meetupid: meetup._id.toString()
      }
    }))
  };
}

export async function getStaticProps(context: any) {
  const meetupid = context.params.meetupid;
  const mongo: any = process.env.MONGO
  const client: any = await MongoClient.connect(mongo);
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const selectedmeetup = await meetupCollection.findOne({_id: new ObjectId(meetupid)});

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedmeetup._id.toString(),
        title: selectedmeetup.title,
        image: selectedmeetup.image,
        address: selectedmeetup.address,
        description: selectedmeetup.description
      }
    }
  };
}

export default MeetupDetails;