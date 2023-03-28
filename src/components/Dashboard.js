import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <div className="flex items-center relative">
        <img
          className="w-full h-64"
          src="https://s3-alpha-sig.figma.com/img/c6cc/ab59/b3f5096439576c444ee7bd282d6b0979?Expires=1679875200&Signature=A8igGOra1jkLuOZJ42LzMxtnX5jbOomYPpuKzJykXt6-ADgrWse9ZjuG5XU9FmSZZkFun9tlUq97mwDNjeAYxU563nW4qbsNk1I0OmCTiFKkX618Zx0lXwmJJ1uvMNeFFVAsJ4hBlNa2vT0iYI74Og91W4HfmGh5sVaZ8yTWnVc4n98dptR1n6wHSRWR7N14Bo4jRgTopRppVvtWI~EdY8V9RgYA24QV7zSq6PAFnB7djBHJWjl0Ie1WSbssLeJ98Rvd8s4AzIiHgNcHceuqo7umEYiQzaiBaBrq-Krhsx5x9Gday50F3DrWp3nsTlFybKzUcjJ2XCBl61Ik728mgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="news"
        />
        <div className="flex items-center justify-center font-bold text-2xl bg-[#DECAFF] bg-opacity-75 h-16 w-full text-[#3C0792] absolute">
          <p>Monthly Articles</p>
        </div>
        <div className="absolute flex justify-end w-full mt-[17%] px-5">
          <button className="rounded-md bg-[#3C0792] px-5 py-2 text-md font-semibold text-white">
            View More
          </button>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex items-center relative w-[50%]">
          <img
            className="w-full h-72"
            src="https://s3-alpha-sig.figma.com/img/c76e/9669/4e2ea9bfa2852f5cee4f1f6eaecaa7f6?Expires=1679875200&Signature=SHfFzq95oK0fJyEneAT5LrdvanD7kOX0PEjPn9NO6VpdwXfDyNxniyMjIyPrrUlrZ4u8Lhv~mtJM7vEDZyz-yxsMVrX~DQGpxUXidTJ152Kq3uF-y2UeHbSkmMtFbjUZjV12nVWWn~-YAwJ-iTjALyAFhL5M1n~cKKJ5rHcphh9oE06mfGVOsGj8F-Z17ix1gx63Nf10IdQaqs36SLLcHgmSOyvmXAVvLAgt0lLkFVFOb-4bhK0Y~WtPGQdSONeMXQgmX~XYIZtFJFvx2tJNmDt5urDAhfRwY6r2dkRl~NYy1jFN7St-yZzmnky7Tx~Tsjy27pYLmjntpPaZrdd33Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="news"
          />
          <div className="flex items-center justify-center font-bold text-2xl bg-[#DECAFF] bg-opacity-75 h-16 w-full text-[#3C0792] absolute">
            <p>Daily Articles</p>
          </div>
          <div className="absolute flex justify-end w-full mt-[41%] px-5">
            <button className="rounded-md bg-[#3C0792] px-5 py-2 text-md font-semibold text-white">
              View More
            </button>
          </div>
        </div>
        <div className="flex items-center relative w-[50%]">
          <img
            className="w-full h-72"
            src="https://s3-alpha-sig.figma.com/img/cbbd/acbc/b932d4759ec31aa0ff270d56f2c56fd2?Expires=1679875200&Signature=ZLej6P88jcN5uS3K4--37sQch3fTixN-~0ZKqUmvB5z~lZr~QBegugm-93pGvIeorlKBHyli~~032o4X4cAEXuEe0H-YsuKu4sYT4fpwaNlIYD6b6pqb6R2758m0RI5rtwWkaxPJdasXQp5rXOiU2yEuvlaRrhI5et7zmaAxpaEzRxygD3CZOzoY-7ZcbeKUovmXiFXTqrrQd0i1XWBDahxnvFMhdswow5zICjtNYuzkRrJZ6lZVeydhriFZaDmJpHJzriKpmhDUszFDrIKdAa0bXocYCkk20mJgXucNyvNv8zLDBO8ZAOSkRbylK92~XJix4HqmbpWu6wjGv8rGXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="news"
          />
          <div className="flex items-center justify-center font-bold text-2xl bg-[#DECAFF] bg-opacity-75 h-16 w-full text-[#3C0792] absolute">
            <p>Weekly Articles</p>
          </div>
          <div className="absolute flex justify-end w-full mt-[41%] px-5">
            <button className="rounded-md bg-[#3C0792] px-5 py-2 text-md font-semibold text-white">
              View More
            </button>
          </div>
        </div>
      </div>
      <p className="font-bold text-xl mt-2">Top Articles</p>
      <hr className="mt-1 border-[#000000]" />

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex p-3 gap-2 bg-[#3C0792] text-white rounded-r-full">
          <img
            className="w-36 h-36 rounded-2xl"
            src="https://s3-alpha-sig.figma.com/img/f9ce/c075/6377d812bd68eca0f051288b2eddc4be?Expires=1679875200&Signature=CEqc77hBtxMnka36YF8ThM2nmd2PFDeVZZNO9fkLvz97SA5G2E3Ar0ljzlzmEwkuvUPSkLBO1P6q-qaeY47P0WNsadJmbHYeIXszHA5hz7wBIjn53AgvVyG11d62g1fM76O9jlb6W~31RpsZMqMa7GnMk~oSYaipy9A6AAvMWzCVroYfJrgDBPOAvxtFSllOHAi3PCeKXM3DjwvsrmdUSMUBwmAMUNhPg53wMbj5pfvnOmCd0-t69CQskJaG9LvUZW4otOQu-kR0FiFbvZD4yBdzp9-5M79KcmDQaRFof3MsHL9yc8nDGqwnFZS4iyJgF6zXYQNAi5dtCfOA9jdh1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="w-[55%]">
            <p className="font-bold text-lg">Johns Hopkins</p>
            <p> Innovation and Technology dolor sit amet, consectetur adipiscing elit</p>
            <div className="flex items-center gap-2 mt-2">
              <div>
                <IoEyeSharp color="#ffffff" />
              </div>
              <p>12000</p>
            </div>
            <div className="flex justify-end">
              <BsArrowRight color="#ffffff" size={35} />
            </div>
          </div>
        </div>
        <div className="flex border p-3 gap-2 bg-[#3C0792] text-white rounded-r-full">
          <img
            className="w-36 h-36 rounded-2xl"
            src="https://s3-alpha-sig.figma.com/img/f9ce/c075/6377d812bd68eca0f051288b2eddc4be?Expires=1679875200&Signature=CEqc77hBtxMnka36YF8ThM2nmd2PFDeVZZNO9fkLvz97SA5G2E3Ar0ljzlzmEwkuvUPSkLBO1P6q-qaeY47P0WNsadJmbHYeIXszHA5hz7wBIjn53AgvVyG11d62g1fM76O9jlb6W~31RpsZMqMa7GnMk~oSYaipy9A6AAvMWzCVroYfJrgDBPOAvxtFSllOHAi3PCeKXM3DjwvsrmdUSMUBwmAMUNhPg53wMbj5pfvnOmCd0-t69CQskJaG9LvUZW4otOQu-kR0FiFbvZD4yBdzp9-5M79KcmDQaRFof3MsHL9yc8nDGqwnFZS4iyJgF6zXYQNAi5dtCfOA9jdh1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="w-[55%]">
            <p className="font-bold text-lg">Johns Hopkins</p>
            <p> Innovation and Technology dolor sit amet, consectetur adipiscing elit</p>
            <div className="flex items-center gap-2 mt-2">
              <div>
                <IoEyeSharp color="#ffffff" />
              </div>
              <p>12000</p>
            </div>
            <div className="flex justify-end">
              <BsArrowRight color="#ffffff" size={35} />
            </div>
          </div>
        </div>{" "}
        <div className="flex border p-3 gap-2 bg-[#3C0792] text-white rounded-r-full">
          <img
            className="w-36 h-36 rounded-2xl"
            src="https://s3-alpha-sig.figma.com/img/f9ce/c075/6377d812bd68eca0f051288b2eddc4be?Expires=1679875200&Signature=CEqc77hBtxMnka36YF8ThM2nmd2PFDeVZZNO9fkLvz97SA5G2E3Ar0ljzlzmEwkuvUPSkLBO1P6q-qaeY47P0WNsadJmbHYeIXszHA5hz7wBIjn53AgvVyG11d62g1fM76O9jlb6W~31RpsZMqMa7GnMk~oSYaipy9A6AAvMWzCVroYfJrgDBPOAvxtFSllOHAi3PCeKXM3DjwvsrmdUSMUBwmAMUNhPg53wMbj5pfvnOmCd0-t69CQskJaG9LvUZW4otOQu-kR0FiFbvZD4yBdzp9-5M79KcmDQaRFof3MsHL9yc8nDGqwnFZS4iyJgF6zXYQNAi5dtCfOA9jdh1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="w-[55%]">
            <p className="font-bold text-lg"> Innovation and Technology</p>
            <p> Innovation and Technology dolor sit amet, consectetur adipiscing elit</p>
            <div className="flex items-center gap-2 mt-2">
              <div>
                <IoEyeSharp color="#ffffff" />
              </div>
              <p>12000</p>
            </div>
            <div className="flex justify-end">
              <BsArrowRight color="#ffffff" size={35} />
            </div>
          </div>
        </div>{" "}
        <div className="flex border p-3 gap-2 bg-[#3C0792] text-white rounded-r-full">
          <img
            className="w-36 h-36 rounded-2xl"
            src="https://s3-alpha-sig.figma.com/img/f9ce/c075/6377d812bd68eca0f051288b2eddc4be?Expires=1679875200&Signature=CEqc77hBtxMnka36YF8ThM2nmd2PFDeVZZNO9fkLvz97SA5G2E3Ar0ljzlzmEwkuvUPSkLBO1P6q-qaeY47P0WNsadJmbHYeIXszHA5hz7wBIjn53AgvVyG11d62g1fM76O9jlb6W~31RpsZMqMa7GnMk~oSYaipy9A6AAvMWzCVroYfJrgDBPOAvxtFSllOHAi3PCeKXM3DjwvsrmdUSMUBwmAMUNhPg53wMbj5pfvnOmCd0-t69CQskJaG9LvUZW4otOQu-kR0FiFbvZD4yBdzp9-5M79KcmDQaRFof3MsHL9yc8nDGqwnFZS4iyJgF6zXYQNAi5dtCfOA9jdh1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="w-[55%]">
            <p className="font-bold text-lg"> Innovation and Technology</p>
            <p> Innovation and Technology dolor sit amet, consectetur adipiscing elit</p>
            <div className="flex items-center gap-2 mt-2">
              <div>
                <IoEyeSharp color="#ffffff" />
              </div>
              <p>12000</p>
            </div>
            <div className="flex justify-end">
              <BsArrowRight color="#ffffff" size={35} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
