import { useEffect } from "react";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import Image from "next/image";

export default function StaticGallery({
  images,
  text = "Take a look at the beautiful work we can do for you. Go for the living that you deserve. We can help with that. If you want to contact us with any questions, please call 910-336-2054 or email info@4zimprov.com.",
}) {

  useEffect(() => {
    initLightboxJS(process.env.NEXT_PUBLIC_LIGHTBOX_PRIVATE_KEY, "Individual");

  },[]);

  return (
    <section className="mt-16 mb-32">
      <div className="mx-auto mb-32 max-w-7xl px-6 lg:px-8">
        <h3 className="text-amber-600 italic text-2xl mb-16">{text}</h3>
        <SlideshowLightbox
          className="grid grid-cols-3 gap-2 my-20"
          images={images}
          lightboxIdentifier="lightbox"
          framework="next"
          theme="day"
          showThumbnails={true}
          iconColor="#D97706"
          thumbnailBorder="#D97706"
          slideshowInterval={5000}
          animateThumbnails={true}
          imgAnimation="fade"
          rightArrowClassname="text-amber-600"
          leftArrowClassname="text-amber-600"
          roundedImages={true}
          modalClose="clickOutside"
          fullScreen={true}
          disableImageZoom={false}    
        >
          {images?.map((image) => (
            <Image
              priority
              key={image.src}
              src={image.src}
              alt={image.alt}
              height={500}
              width={500}
              data-lightboxjs="lightbox"
              className="w-full h-full object-cover rounded-lg relative"
              quality={100}
              
            />
          ))}
      </SlideshowLightbox>
      </div>
    </section>
  );
}
