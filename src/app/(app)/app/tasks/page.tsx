import { v4 as uuid } from 'uuid';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const TASKS_DATA = [
	{
		id: uuid(),
		title: 'Finish TypeScript project',
		category: 'Work',
		user: 'Alice',
		dueDate: '2024-06-20',
	},
	{
		id: uuid(),
		title: 'Buy groceries',
		category: 'Personal',
		user: 'Bob',
		dueDate: '2024-06-15',
	},
	{
		id: uuid(),
		title: 'Plan weekend trip',
		category: 'Leisure',
		user: 'Charlie',
		dueDate: '2024-06-18',
	},
	{
		id: uuid(),
		title: 'Submit tax documents',
		category: 'Finance',
		user: 'Diana',
		dueDate: '2024-06-30',
	},
	{
		id: uuid(),
		title: 'Prepare presentation',
		category: 'Work',
		user: 'Eve',
		dueDate: '2024-06-25',
	},
	{
		id: uuid(),
		title: 'Read new book',
		category: 'Personal',
		user: 'Frank',
		dueDate: '2024-06-22',
	},
];

export default function TasksPage() {
	return (
		<section>
			{/**
			 * TaksGrid
			 * Button to add a new task with a plus icon that opens a modal
			 * Each task has icon for delete and edit
			 * Each task card should have a title, category, user, and due date
			 * Each task detail should have a title, category, user, due date, description, and status
			 */}

			<MaxWidthWrapper className='flex flex-col'>
				<div>
					<h1 className='text-3xl/relaxed md:text-5xl/relaxed xl:text-7xl/relaxed font-semibold text-center tracking-tight mb-12'>
						Task Manager
					</h1>
				</div>
				<div className='grid grid-cols-12 gap-6 my-12 md:my-24 xl:my-48'>
					{TASKS_DATA.map(task => (
						<div
							className='col-span-12 md:col-span-6 xl:col-span-4'
							key={task.id}
						>
							<Card>
								<CardHeader>
									<CardTitle>{task.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p>
										<span>{task.category}</span> - <span>{task.user}</span> -{' '}
										<span>{task.dueDate}</span>
									</p>
								</CardContent>
								<CardFooter>Card Footer</CardFooter>
							</Card>
						</div>
					))}
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
