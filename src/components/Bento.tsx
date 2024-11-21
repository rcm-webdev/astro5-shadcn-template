// Define an array of image objects
const images = [
  { id: 1, src: "/food/noodle-1.jpeg", alt: "Noodle dish 1" },
  { id: 2, src: "/food/noodle-2.jpeg", alt: "Noodle dish 2" },
  { id: 3, src: "/food/noodle-3.jpg", alt: "Noodle dish 3" },
  { id: 4, src: "/food/noodle-2.jpeg", alt: "Noodle dish 2" },
];

const Bento = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="aspect-square overflow-hidden rounded-3xl"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default Bento;
