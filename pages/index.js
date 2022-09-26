import { useScroll } from "../lib/external-components";
import { useEffect } from "react";
import { useAppContext } from "../context/context";
import Drawer from "../components/sidedrawer/drawer";
import HeroSection from "../components/hero-section/hero-section";
import AbordareaNoastra from "../components/abordarea-noastra/abordarea-noastra";
import Tehnologii from "../components/tehnologii/tehnologii";
import Portofoliu from "../components/portofoliu/portofoliu";
import Contact from "../components/contact/contact";
import Principii from "../components/principii/principii";
import Footer from "../components/footer/footer";
import Cookies from "../components/cookies-policy/cookies";
import HeroImage from "../components/hero-image/hero-image";
import Despre from "../components/despre/despre";
import Servicii from "../components/servicii/servicii";
import client from "../lib/apollo";
import { gql } from "@apollo/client";

function Home({
  data: {
    title,
    subtitle,
    desprelist,
    globe,
    heroimage,
    portofoliu,
    rocket,
    servicii,
    tehnologii,
    firstServicii,
    abordarea,
  },
}) {
  const { scrollY } = useScroll();
  const { setShowFab, showDrawer, showCookies } = useAppContext();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 350) {
        setShowFab(true);
      } else setShowFab(false);
    });
  }, []);

  return (
    <div className="p-1 flex flex-col min-h-full overflow-x-hidden items-center">
      {showDrawer && <Drawer />}
      {showCookies && <Cookies />}
      <HeroSection data={{ title, subtitle, globe, rocket, firstServicii }} />
      <HeroImage data={heroimage} />
      <Despre data={desprelist} />
      <Principii />
      <AbordareaNoastra data={abordarea} />
      <Tehnologii data={tehnologii} />
      <Servicii data={servicii} />
      <Portofoliu data={portofoliu} />
      <Contact />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const GET_HOMEPAGE = gql`
    query HomepageInfo {
      posts {
        nodes {
          homepage {
            abordarea {
              fifth {
                title
                img {
                  altText
                  sourceUrl
                }
              }
              first {
                title
                img {
                  altText
                  sourceUrl
                }
              }
              fourth {
                title
                img {
                  altText
                  sourceUrl
                }
              }
              second {
                title
                img {
                  altText
                  sourceUrl
                }
              }
              sixth {
                title
                img {
                  altText
                  sourceUrl
                }
              }
              third {
                title
                img {
                  altText
                  sourceUrl
                }
              }
            }
            desprelist {
              eight {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
              fifth {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
              first {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
              fourth {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
              ninth {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
              second {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
              seventh {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
              sixth {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
              third {
                content
                firstimg {
                  altText
                  sourceUrl
                }
              }
            }
            firstServicii {
              fifth
              first
              fourth
              second
              sixth
              third
            }
            globe {
              altText
              sourceUrl
            }
            heroimage {
              altText
              sourceUrl
            }
            rocket {
              altText
              sourceUrl
            }
            servicii {
              aplicatii {
                content
                title
                id
              }
              design {
                content
                title
                id
              }
              ecommerce {
                content
                title
                id
              }
              mentenanta {
                content
                title
                id
              }
              seo {
                content
                title
                id
              }
              website {
                content
                title
                id
              }
            }
            subtitle
            title
            tehnologii {
              all {
                eight {
                  altText
                  sourceUrl
                }
                eighteen {
                  altText
                  sourceUrl
                }
                eleven {
                  altText
                  sourceUrl
                }
                fifth {
                  altText
                  sourceUrl
                }
                fiftheen {
                  altText
                  sourceUrl
                }
                first {
                  altText
                  sourceUrl
                }
                fourth {
                  altText
                  sourceUrl
                }
                fourtheen {
                  altText
                  sourceUrl
                }
                nine {
                  altText
                  sourceUrl
                }
                second {
                  altText
                  sourceUrl
                }
                seven {
                  altText
                  sourceUrl
                }
                seventheen {
                  altText
                  sourceUrl
                }
                sixth {
                  altText
                  sourceUrl
                }
                sixtheen {
                  altText
                  sourceUrl
                }
                ten {
                  altText
                  sourceUrl
                }
                third {
                  altText
                  sourceUrl
                }
                thirteen {
                  altText
                  sourceUrl
                }
                twelve {
                  altText
                  sourceUrl
                }
              }
            }
            portofoliu {
              imagini {
                first {
                  link
                  img {
                    altText
                    sourceUrl
                  }
                }
                second {
                  link
                  img {
                    altText
                    sourceUrl
                  }
                }
                third {
                  link
                  img {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const homepageResp = await client.query({ query: GET_HOMEPAGE });
  const homepageData = homepageResp?.data?.posts?.nodes[0]?.homepage;

  return { props: { data: homepageData } };
}

export default Home;
