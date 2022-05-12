import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/Head';
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta 
          name='description'
          content='Browse a list of Meetups'
        />
      </Head>
      <MeetupDetail 
        image={props.meetupData.image}
        title={props.meetupData.titlr}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO);
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({
      params: {
        meetupid: meetup._id.toString()
      }
    }))
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;

  const client = await MongoClient.connect(process.env.MONGO);
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const selectedmeetup = await meetupCollection.findOne({_id: ObjectId(meetupid)});

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