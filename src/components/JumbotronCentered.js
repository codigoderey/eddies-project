export default function JumbotronCentered({
    topText = "We are here for you",
    mainText = "Get a free quote when you need it",
    subText = "Fill out the required information and we will get back to you as soon as possible.",
    hrefLink = "/gallery",
    hrefText = "Visit now"
  }) {
    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-amber-600">{topText}</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-amber-950 sm:text-6xl">{mainText}</h2>
          <p className="mt-6 mb-10 text-lg leading-8 text-gray-600">
            {subText}
          </p>
          <a className="rounded-md bg-amber-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 transition-all" href={hrefLink}>{hrefText}</a>
        </div>
      </div>
    );
  }
  