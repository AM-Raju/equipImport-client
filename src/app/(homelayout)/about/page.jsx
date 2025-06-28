import AboutBanner from "@/components/about/AboutBanner";
import React from "react";

const AboutUsPage = () => {
  return (
    <main className="container mx-auto ">
      <AboutBanner></AboutBanner>
      <p className="my-6 max-w-6xl mx-auto px-4 xl:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        asperiores cupiditate atque commodi, nostrum in fuga reiciendis ipsam
        dolore, quo assumenda omnis eos soluta velit? Asperiores explicabo
        consectetur eum error, rem commodi necessitatibus. Aspernatur quas,
        fugit voluptas vero, architecto ratione recusandae eius, animi
        repellendus veritatis esse saepe commodi corporis hic inventore
        excepturi est? Est libero tempora asperiores modi nulla nobis? Libero
        quos aspernatur illo ipsa aperiam id, asperiores illum est commodi
        reprehenderit deserunt facilis harum quae quasi animi tenetur. Maxime
        omnis veniam nesciunt id modi tempora molestiae, soluta fuga qui sequi
        asperiores facilis non rem dolorum, illo laborum laboriosam ullam!
      </p>
      <section className="container mx-auto px-4 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3  text-white text-center">
          {/* Quality */}
          <div className="bg-blue-600 h-52 lg:h-80 p-6 flex flex-col items-center justify-center shadow-md">
            <h3 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold">
              Quality
            </h3>
          </div>

          {/* Integrity */}
          <div className="bg-green-600 h-52 lg:h-80 p-6 flex flex-col items-center justify-center shadow-md">
            <h3 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold">
              Integrity
            </h3>
          </div>

          {/* Commitment */}
          <div className="bg-red-600 h-52 lg:h-80 p-6 flex flex-col items-center justify-center shadow-md">
            <h3 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold">
              Commitment
            </h3>
          </div>
        </div>
      </section>
      <section>
        <p className="mb-6 max-w-6xl mx-auto px-4 xl:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          asperiores cupiditate atque commodi, nostrum in fuga reiciendis ipsam
          dolore, quo assumenda omnis eos soluta velit? Asperiores explicabo
          consectetur eum error, rem commodi necessitatibus. Aspernatur quas,
          fugit voluptas vero, architecto ratione recusandae eius, animi
          repellendus veritatis esse saepe commodi corporis hic inventore
          excepturi est? Est libero tempora asperiores modi nulla nobis? Libero
          quos aspernatur illo ipsa aperiam id, asperiores illum est commodi
          reprehenderit deserunt facilis harum quae quasi animi tenetur. Maxime
          omnis veniam nesciunt id modi tempora molestiae, soluta fuga qui sequi
          asperiores facilis non rem dolorum, illo laborum laboriosam ullam!
        </p>
        <p className="my-6 max-w-6xl mx-auto px-4 xl:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          asperiores cupiditate atque commodi, nostrum in fuga reiciendis ipsam
          dolore, quo assumenda omnis eos soluta velit? Asperiores explicabo
          consectetur eum error, rem commodi necessitatibus. Aspernatur quas,
          fugit voluptas vero, architecto ratione recusandae eius, animi
          repellendus veritatis esse saepe commodi corporis hic inventore
          excepturi est? Est libero tempora asperiores modi nulla nobis? Libero
          quos aspernatur illo ipsa aperiam id, asperiores illum est commodi
          reprehenderit deserunt facilis harum quae quasi animi tenetur. Maxime
          omnis veniam nesciunt id modi tempora molestiae, soluta fuga qui sequi
          asperiores facilis non rem dolorum, illo laborum laboriosam ullam!
        </p>
      </section>
    </main>
  );
};

export default AboutUsPage;
