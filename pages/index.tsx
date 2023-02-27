import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import MeetupList from '@/components/meetups/MeetupList';

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta 
          name='description'
          content='Browse a list of Meetups'
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  )
}

export async function getStaticProps() {
  const mongo: any = process.env.MONGO
  const client: any = await MongoClient.connect(mongo);
  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup: { _id: { toString: () => any; }; title: string; image: string; address: string; description: string; }) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      }))
    },
    revalidate: 10
  };
}
