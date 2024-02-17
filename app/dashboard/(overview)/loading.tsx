import type { NextPage } from 'next';
import DashboardSkeleton from '@/app/ui/skeletons';

interface LoadingProps {}

const Loading: NextPage<LoadingProps> = () => {
	return <DashboardSkeleton />;
};

export default Loading;
