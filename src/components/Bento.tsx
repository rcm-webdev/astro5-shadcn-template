// Define an array of image objects
const images = [
  { id: 1, src: "/food/noodle-1.jpeg", alt: "Noodle dish 1" },
  { id: 2, src: "/food/noodle-2.jpeg", alt: "Noodle dish 2" },
  { id: 3, src: "/food/noodle-3.jpg", alt: "Noodle dish 3" },
  { id: 4, src: "/food/noodle-2.jpeg", alt: "Noodle dish 2" },
  { id: 5, src: "/food/noodle-2.jpeg", alt: "Noodle dish 2" },
  { id: 6, src: "/food/noodle-3.jpg", alt: "Noodle dish 3" },
  { id: 7, src: "/food/noodle-3.jpg", alt: "Noodle dish 3" },
  { id: 8, src: "/food/noodle-3.jpg", alt: "Noodle dish 3" },
  { id: 9, src: "/food/noodle-3.jpg", alt: "Noodle dish 3" },
];

const Bento = () => {
  return (
    <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
      {images.map((image) => (
        <img
          key={image.id} // Use a unique key for each element
          src={image.src} // Map the src attribute
          alt={image.alt} // Map the alt attribute
          width={300}
          height={300}
          className="rounded-3xl w-full"
        />
      ))}
    </div>
  );
};

export default Bento;
