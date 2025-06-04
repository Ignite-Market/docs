import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const Logo = require("@site/static/img/ignitemarket-logo.svg").default;

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <span className="hidden">{siteConfig.title}</span>
          <Logo style={{ maxWidth: "100%", width: "400px", height: "auto" }} />
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <br />

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/overview"
          >
            Get Started
          </Link>

          <Link
            className="button button--secondary button--outline button--lg"
            href="https://ignitemarket.xyz/"
          >
            Open App
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main
        style={{
          backgroundColor: "#111827",
          backgroundImage:
            "linear-gradient(to right, rgba(140, 82, 255, 0.1) 1px, transparent 1px), linear-gradient(rgba(140, 82, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
