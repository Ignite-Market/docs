---
sidebar_position: 1
title: Fund a market
---

# How to: Fund a market

Providing liquidity to a market earns you a share of the **trading fees** it generates and helps other traders get better prices. Funding can be added **at any time**—even after trading has started. Trading on the market begins automatically once the **minimum funding threshold** set by the market creator is reached.

## Before you start

- Make sure your wallet is **connected** to Ignite Market on the **Flare** network.
- Your wallet must hold the market's **collateral token** (e.g. **USDC**, **XRP**).
- Keep a small amount of **FLR** to cover the gas fees.
- If this is your **first** time interacting with the collateral token, your wallet will prompt you to **increase allowance** so the protocol can spend the token on your behalf. This is a one-time approval.

:::info Withdrawal timing
Added liquidity **cannot be withdrawn until the market is resolved**. Once the outcome is finalized, you will be able to redeem your pool share (plus earned fees) via the **Withdraw** button.
:::

:::info Trading threshold
A new market starts in *Funding* mode. As soon as total liquidity meets the creator-defined threshold, the **Buy** and **Sell** tabs become available and regular trading begins. You can still add more funding after this point.
:::

## Step-by-step

1. **Open a market** you want to support.
2. In the order panel, select the **Fund** tab (visible both before and after trading has started).
3. **Enter the amount** of collateral you want to contribute, or click **Max** to use your full balance.
4. Click **Fund**. A two-step modal will appear:
   1. **Increase allowance** – sign an approval transaction (only once per token).
   2. **Confirm transaction** – sign the funding transaction.
5. Wait a few seconds for the block to confirm. A **Congratulations!** dialog with confetti will pop up once the contribution is successful.
6. Your **pool share** now shows up under the chart, and your wallet balance is updated.

:::tip Withdrawing liquidity
Liquidity providers can withdraw their share (plus earned fees) **after the market resolves**.
:::

<div style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '1.8216318785578747', padding: '40px 0' }}>
  <iframe src="https://app.supademo.com/embed/cmcujdiph24kz9st8766q1yuq?embed_v=2" loading="lazy" title="Ignite Market ‑ Fund a Market" allow="clipboard-write" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
  </iframe>
</div>
