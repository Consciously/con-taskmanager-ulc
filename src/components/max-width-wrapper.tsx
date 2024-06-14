import { cn } from '@/lib/utils';

type MaxWidthWrapperProps = {
	children: React.ReactNode;
	className?: string;
};

export default function MaxWidthWrapper({
	children,
	className,
}: MaxWidthWrapperProps) {
	return (
		<div
			className={cn(
				'mx-auto w-full h-full max-w-screen-2xl px-2.5 md:px-20',
				className,
			)}
		>
			{children}
		</div>
	);
}
