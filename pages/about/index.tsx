import Head from "next/head";
import Image from "next/image";
import React from "react";
import Photo from "../../public/photo.png";

export default function About() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-center space-x-5">
          <div className="flex-shrink-0">
            <div className="relative h-16 w-16 lg:h-20 lg:w-20 rounded-full border border-white/10">
              <Image src={Photo} alt="headshot" />
              <span
                aria-hidden="true"
                className="rounded-full absolute inset-0 shadow-inner"
              />
            </div>
          </div>
          <div className="pt-1.5">
            <h1 className="text-black lg:text-xl">Siddarth Patel</h1>
            <p className="text-neutral-500 font-light text-sm">
              Software Engineer in Raleigh/Durham
            </p>
          </div>
        </div>
      </div>
      <div className="font-light text-sm mt-16">
        <p className="text-black">About</p>
        <div className="text-neutral-500 mt-3 space-y-3">
          <p>
            A journey through IBM began with hands-on work with Kubernetes UIs 
            for IBM Cloud Private, blending React, Node.js, and JavaScript to create fast, 
            scalable interfaces. Server-side rendering and Redux delivered snappy, stateful experiences, 
            while Go operators and Docker containers provided the backbone for reliable deployments and orchestration.
          </p>
          <p>
            Next chapters included orchestrating powerful data streaming and processing platforms. 
            Deploying Apache Flink and Elasticsearch services through custom Go operators ensured a pivotal migration 
            from the deprecated Google Flink Operator to the robust Apache Flink Kubernetes Operator—unlocking new heights 
            for big data workloads. DevOps and automation became daily companions. 
            CI/CD pipelines, crafted with Travis CI, Jenkins, and GitHub Actions, ensured IBM 
            products moved seamlessly from development to delivery. Bash scripts and automated validation routines 
            kept quality high and manual toil low. Clouds—AWS, Azure, and IBM Cloud—were tamed with a system designed 
            to make SaaS onboarding effortless. Product data found a home in MongoDB, managed by Go APIs, while Tekton 
            pipelines and Argo CD worked behind the scenes, syncing repositories and registering offerings in cloud 
            marketplaces with a single webhook trigger.
          </p>
          <p>
            From building mobile app components with React Native and automating UI tests with Appium, 
            to designing scalable backend systems and streamlining product automation, each chapter at IBM has been 
            about solving complex problems and making technology work smarter, faster, and more intuitively for everyone involved.
          </p>
        </div>
      </div>
    </>
  );
}