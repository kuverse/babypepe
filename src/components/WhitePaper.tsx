import React, { CSSProperties } from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    maxWidth: "800px",
    margintop: "120px",
    padding: "100px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  } as CSSProperties,
  header: {
    textAlign: "center" as CSSProperties["textAlign"],
    fontFamily:"'PepeFont', sans-serif",
    color: "#187235",
    fontSize: "2.5rem",
  },
  section: {
    marginBottom: "20px",
    color: "#187235",
    fontFamily:"'SecondaryFont', sans-serif"

  } as CSSProperties,
  sectionTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#187235",
    marginBottom: "10px",
    borderBottom: "2px solid #187235",
    paddingBottom: "5px",
    fontFamily:"'PepeFont', sans-serif"

  } as CSSProperties,
  list: {
    paddingLeft: "20px",
    color: "#187235",
    fontFamily:"'SecondaryFont', sans-serif",
    listStyleType: "disc" as CSSProperties["listStyleType"],
  },
  listItem: {
    marginBottom: "8px",
    color: "#187235",
    fontFamily:"'SecondaryFont', sans-serif"


  } as CSSProperties,
  callToAction: {
    textAlign: "center" as CSSProperties["textAlign"],
    marginTop: "30px",
    padding: "15px",
    backgroundColor: "#187235",
    color: "white",
    borderRadius: "8px",
    fontWeight: "bold",
  } as CSSProperties,
};

const WhitePaper = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Babypepe White Paper</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Introduction</h2>
        <p>
          In a world oversaturated with memecoins, where thousands of new coins
          launch every day, it can be challenging to identify the few with
          promising and lasting fundamentals. <strong>Babypepe</strong> stands
          out through its inherent simplicity, decentralized nature, and an
          unmistakable narrative.
        </p>
        <p>
          This white paper outlines the key fundamentals and foundations on
          which Babypepe is built, including <strong>tokenomics</strong> and a
          detailed <strong>roadmap</strong>. As a{" "}
          <strong>community-driven takeover</strong>, Babypepe boasts healthy
          distribution, verified bubblemaps, and a robust holder count. With
          Binance recently listing Babydoge—and acknowledging they were late to
          list Pepe—Babypepe is well-positioned to meet the criteria for future
          listings on top-tier exchanges like Binance.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Tokenomics</h2>
        <h3>Total Supply</h3>
        <p>
          <strong>420,690,000,000 Babypepe tokens</strong>
        </p>
        <h3>Initial Token Distribution</h3>
        <p>All tokens are available on the open market. No vested or presale allocations.</p>
        <h3>Key Features</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>No taxes:</strong> 100% of every transaction benefits the community.
          </li>
          <li style={styles.listItem}>
            <strong>Renounced Contract Address (CA):</strong> Fully decentralized, ensuring no central control.
          </li>
          <li style={styles.listItem}>
            <strong>Burned Liquidity:</strong> Locked liquidity for trust and transparency.
          </li>
          <li style={styles.listItem}>
            <strong>Community-Driven:</strong> Powered by holders and enthusiasts.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Technology</h2>
        <p>
          Babypepe is an <strong>ERC-20 token</strong> built on the{" "}
          <strong>Ethereum blockchain</strong>, ensuring secure, efficient, and
          transparent transactions without the need for central authority. Its
          smart contract leverages the reliability and scalability of Ethereum
          to foster a trustless ecosystem.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Roadmap</h2>
        <h3>Phase 1</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Be born: Launch Babypepe into the world.</li>
          <li style={styles.listItem}>Achieve 1,000+ holders.</li>
          <li style={styles.listItem}>Form a cult: Unite a passionate community.</li>
        </ul>
        <h3>Phase 2</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Establish a long-term partnership with <strong>Skult Studio</strong>, a premier Web3 art studio.
          </li>
          <li style={styles.listItem}>Purchase Babypepe.com and develop a professional website.</li>
          <li style={styles.listItem}>Reach 3,000+ holders.</li>
          <li style={styles.listItem}>Secure the first exchange listing.</li>
        </ul>
        <h3>Phase 3</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Dominate the meme coin space by becoming #1 in the Baby Meta.</li>
          <li style={styles.listItem}>Grow to 10,000+ holders.</li>
        </ul>
        <h3>Phase 4</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Expand the community to 50,000+ holders.</li>
          <li style={styles.listItem}>Make Papa Pepe proud: Cement Babypepe’s legacy in the memecoin world.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Conclusion</h2>
        <p>
          Babypepe aims to establish itself as a <strong>leading memecoin</strong> with a distinct identity
          and a steadfast focus on simplicity, fairness, and community
          engagement. By prioritizing decentralization, transparency, and
          inclusivity, Babypepe aspires to foster sustainable growth, encourage
          innovation, and deliver long-term value for its holders.
        </p>
      </div>

      <div style={styles.callToAction}>
        To learn more and join the Babypepe community, visit our website at{" "}
        <a href="https://Babypepe.com" style={{ color: "white", textDecoration: "underline" }}>
          Babypepe.com
        </a>{" "}
        or connect with us on social media.
      </div>
    </div>
  );
};

export default WhitePaper;
