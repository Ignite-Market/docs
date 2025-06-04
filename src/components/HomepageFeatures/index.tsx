import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
  color: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Flare Network Capabilites",
    Svg: require("@site/static/img/features/shield.svg").default,
    description: (
      <>
        Built natively on Flare Network to leverage its FDC capabilities for
        secure, trusted market resolutions.
      </>
    ),
    color: "#bc49bc",
  },
  {
    title: "DAO Token",
    Svg: require("@site/static/img/features/tokens.svg").default,
    description: (
      <>
        Governance token enabling resolition rights, fee discounts, staking
        rewards, and market creation privileges.
      </>
    ),
    color: "#ff5a7e",
  },
  {
    title: "AI-Enhanced Resolution",
    Svg: require("@site/static/img/features/robot.svg").default,
    description: (
      <>
        Our AI system integrated with Flare TEE validates outcomes using
        multiple models for unparalleled accuracy.
      </>
    ),
    color: "#4668e0",
  },
  {
    title: "DAO Governance",
    Svg: require("@site/static/img/features/users.svg").default,
    description: (
      <>
        Decentralized governance enabling token holders to vote on protocol
        upgrades, fee structures, and market validation.
      </>
    ),
    color: "#33a382",
  },
  {
    title: "Advanced automated market maker (AMM)",
    Svg: require("@site/static/img/features/bars.svg").default,
    description: (
      <>
        Spelcial prediction markets market maker used for efficient price
        discovery and reduced slippage across market shares.
      </>
    ),
    color: "#bc49bc",
  },
  {
    title: "Multi Token Compatibility",
    Svg: require("@site/static/img/features/link.svg").default,
    description: (
      <>
        Native token FAssets operability with Flare Network at its core,
        enabling access XRP and other ecosystems.
      </>
    ),
    color: "#ff5a7e",
  },
];

function Feature({ title, Svg, description, color }: FeatureItem) {
  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "#0a0a0a",
        // border: "1px solid rgba(188, 73, 188, 0.3)",
        border: "1px solid rgba(31, 41, 55, 1)",
        borderRadius: "0.75rem",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            backgroundColor: color,
            borderRadius: "0.5rem",
            marginRight: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
          }}
        >
          <Svg role="img" />
        </div>

        <Heading as="h3" style={{ marginBottom: "0" }}>
          {title}
        </Heading>
      </div>

      <div
        style={{
          marginLeft: "3.5rem",
        }}
      >
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
