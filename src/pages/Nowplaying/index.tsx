export const arr = new Array(18).fill('카드')

const Nowplaying = () => {
  return (
    <div className="bg-subColor-200 w-[1440px] mx-auto">
      <div className="text-xl font-bolder mt-16">NowPlaying</div>
      <div className="font-md text-md my-6">현재 상영하는 영화를 확인 할 수 있습니다.</div>
      <div className="flex flex-wrap mx-auto">
        {arr.map((el) => (
          <div className="bg-slate-100 w-card h-card m-2">{el}</div>
        ))}
      </div>
    </div>
  )
}

export default Nowplaying
