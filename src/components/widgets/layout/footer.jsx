import PropTypes from "prop-types";
import { Typography} from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 text-blue-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4 text-blue-gray-50">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-50">
              {description}
            </Typography>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase text-blue-gray-50"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-50 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-green"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Eazipay",
  description:
    "Copyright @ 2023 Eazipay",
    "All right reserved",
  menus: [
    {
      name: "links",
      items: [
        { name: "About", href: "" },
        { name: "", href: "" },
        {
          name: "",
          href: "",
        },
        {
          name: "",
          href: "",
        },
      ],
    },
    {
      name: "",
      items: [
        {
          name: "",
          href: "",
        },
        {
          name: "",
          href: "",
        },
        {
          name: "",
          href: "",
        },
        {
          name: "",
          href: "",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Eazipay.{" "}
      <a
        href=""
        target="_blank"
        className="text-white-gray-500 transition-colors hover:text-white-500"
      >
      </a>
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
