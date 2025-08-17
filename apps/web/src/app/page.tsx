import { redirect } from 'next/navigation';

export default function Home() {
	redirect('/parallax.html');
}

export const runtime = "edge";
export const revalidate = 30;
