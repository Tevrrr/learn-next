import type { NextPage } from 'next';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Customers',
};

interface PageProps {}

const Page: NextPage<PageProps> = () => {
	return <p>Customers Page</p>;
};

export default Page;
