import Router from 'next/router';
import React from 'react';
import { MainLayout } from '../../components/mainLayout';

interface AboutPageProps {
  title: string
}

export default function About({ title }: AboutPageProps) {
  return (
    <MainLayout title={'About Page'}>

      <h1>{title}</h1>

      <button onClick={() => Router.push('/')}>
        Go back to home
      </button>

    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json()

  return {
    title: data.title
  }
}