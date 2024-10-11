import GetQuoteButton from "./GetQuoteButton";

export default function HeaderSectionWithBgImage({
  topText,
  mainText,
  bottomText,
}) {
  return (
    <div className="relative h-[calc(90vh-88px)] bg-black/10 mt-[88px] text-white">
      <div className="absolute inset-0 -z-10 h-full">
        <video
          src="/videos/mountains-video-01.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center flex flex-col h-full justify-center">
        <p className="flex justify-center font-semibold leading-7 text-amber-600">
          <span className="w-fit bg-white px-3 rounded-lg">{topText}</span>
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {mainText}
        </h2>
        <p className="mt-6 text-lg text-white">
          <strong>{bottomText}</strong>
        </p>
        <div className="mt-10">
          <GetQuoteButton 
            classes="bg-amber-600 hover:bg-amber-700"
          />
        </div>
      </div>
    </div>
  );
}
