'use client';
import { useParams } from "next/navigation";

export default function id() {

  const { id } = useParams();
  return (
    <div>
      <h1>Welcome to the {id} </h1>
      <p>This i the main landing of the application</p>
    </div>
  );
}