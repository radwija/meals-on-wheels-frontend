import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import Layout from "../components/Layout";
const AboutUs = () => {
  const [refSection1, inViewSection1] = useInView();
  const [refSection2, inViewSection2] = useInView();
  const [refSection3, inViewSection3] = useInView();
  return (
    <Layout>
      <div className="bg-primary">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Welcome to Our Company
              </h1>
              <p className="text-xl md:text-2xl text-center max-w-2xl mb-12">
                We are a passionate team dedicated to delivering hot, nutritious
                meals to individuals in need, ensuring their well-being and
                fostering a sense of community.
              </p>

              <motion.img
                src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80 "
                alt="Hero Image"
                ref={refSection1}
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inViewSection1
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Our Vision and Mission
              </h2>
              <motion.div
                className="max-w-3xl mb-12"
                ref={refSection2}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inViewSection2
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg md:text-xl text-center">
                  MerryMeal is a compassionate and dedicated charitable
                  organization that focuses on providing nutritious meals to
                  individuals who are unable to cook for themselves or maintain
                  their nutritional status. Our primary goal is to ensure that
                  qualified adults living at home have access to hot noon meals,
                  promoting their well-being and overall health.
                </p>
              </motion.div>
              <div className="max-w-4xl text-justify">
                <motion.p
                  className="text-lg md:text-xl mb-6"
                  ref={refSection2}
                  initial={{ opacity: 0, translateX: -100 }}
                  animate={
                    inViewSection2
                      ? { opacity: 1, translateX: 0 }
                      : { opacity: 0, translateX: -100 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="font-bold">Our vision</span> is to create a
                  society where no one goes hungry or lacks proper nutrition. We
                  aspire to be a leading force in addressing the nutritional
                  needs of vulnerable individuals and promoting their
                  well-being. Through our efforts, we envision a future where
                  everyone has access to wholesome meals, regardless of their
                  circumstances.
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl"
                  ref={refSection2}
                  initial={{ opacity: 0, translateX: 200 }}
                  animate={
                    inViewSection2
                      ? { opacity: 1, translateX: 0 }
                      : { opacity: 0, translateX: 200 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="font-bold">Our mission</span> is to deliver
                  nutritious meals to qualified adults living at home, ensuring
                  they receive the sustenance they need to thrive. We strive to
                  address the challenges faced by individuals who are unable to
                  cook for themselves, making a positive impact on their
                  lives.Our dedicated team works diligently to prepare and
                  deliver hot noon meals, bringing nourishment and a sense of
                  care to our members.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Our Partners
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Partner 1 */}

                <motion.img
                  src="https://static.vecteezy.com/system/resources/previews/006/735/689/original/vintage-grilled-barbecue-logo-retro-bbq-fire-grill-food-and-restaurant-icon-red-fire-icon-free-vector.jpg"
                  alt="Partner 1"
                  ref={refSection3}
                  className="rounded-lg shadow-lg object-fill"
                  style={{ width: "302px", height: "244px" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    inViewSection3
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                />

                {/* Partner 2 */}
                <motion.img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuRhTohUgknm04uhPuGboFm9B0CTdYfWrFg&usqp=CAU"
                  alt="Partner 2"
                  ref={refSection3}
                  className="rounded-lg shadow-lg object-fill"
                  style={{ width: "302px", height: "244px" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    inViewSection3
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 }}
                />

                {/* Partner 3 */}
                <motion.img
                  src="https://i.etsystatic.com/9264928/r/il/9fcb2e/1947415219/il_fullxfull.1947415219_f61b.jpg"
                  alt="Partner 3"
                  ref={refSection3}
                  className="rounded-lg shadow-lg object-fill"
                  style={{ width: "302px", height: "244px" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    inViewSection3
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                />

                {/* Partner 4 */}
                <motion.img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-delivery-logo-design-template-a342a3b7515a10c800c6885bce8b3ae9_screen.jpg?ts=1619678752"
                  alt="Partner 4"
                  ref={refSection3}
                  className="rounded-lg shadow-lg object-fill"
                  style={{ width: "302px", height: "244px" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    inViewSection3
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
