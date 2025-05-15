import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

interface TimelineItemProps {
  date: string
  label: string
  title: string
  content: string
}
//Vertical Timelie
export default function VerticalTimeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className={`${caveat.variable} -my-6 text-gray-200`}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:w-[2px] before:bg-gradient-to-b from-indigo-400 via-purple-500 to-indigo-600 before:opacity-50 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 shadow-md">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-200 bg-emerald-700/80 rounded-full shadow-lg">{item.date}</time>
            <div className="text-xl font-bold text-gray-100">{item.title}</div>
          </div>
          <div className="text-gray-300">{item.content}</div>
        </div>
      ))}
    </div>
  )
}