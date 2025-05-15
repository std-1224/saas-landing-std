
import VerticalTimeline from '@/components/verticalTimeline'
 
  
function TimeLine() {

  const timelineItems = [
    {
      date: "June, 2021",
      label: "The origin",
      title: "Acme was founded in Milan, Italy",
      content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
    },
    {
      date: "Sep, 2022",
      label: "The milestone",
      title: "Reached 5K customers",
      content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
    },
    {
      date: "March, 2023",
      label: "The acquisitions",
      title: "Acquired various companies, inluding Technology Inc.",
      content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
    },
    {
      date: "Dec, 2024",
      label: "The IPO",
      title: "Acme went public at the New York Stock Exchange",
      content: "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus."
    },            
  ]


  return (
    <>
      <div className="relative h-[600px] flex flex-col justify-center bg-gradient-to-b from-[#5D2CA8] to-black dark:bg-black overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

            <div className="w-full max-w-3xl mx-auto">
              <VerticalTimeline items={timelineItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeLine;