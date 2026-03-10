import { useEffect } from "react";

export default function Text({ updates, reset }) {
  // useEffect #1 – runs once on mount, cleans up on unmount
  //This runs once on mount because the dependency array is [].
  //The function you return is the cleanup. React calls it on unmount.
  useEffect(() => {
    console.log("I've mounted!");

    return () => {
      console.log("I've unmounted!");
      reset();
    };
  }, []);


  // useEffect #2 – runs whenever "updates" changes
  useEffect(() => {
    console.log(`I've updated: ${updates} times`);
  }, [updates]);
  //This runs after every render where updates changed.

  return <p className="text">I've been updated {updates} times!</p>;
}

useEffect(() => {
    setCount(count + 1); // Triggers re render so effect runs again
  }, [count]);

  