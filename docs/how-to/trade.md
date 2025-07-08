---
sidebar_position: 2
title: Make first trade
---

# How to: Make a first trade

Ignite Market uses a prediction-market AMM where you buy and sell outcome shares priced between **0** and **1** collateral token (e.g. USDC, XRP). Buying shares is similar to placing a bet: the more likely an outcome, the higher the price.

## Before you start

- Make sure your wallet is **connected** and funded with market's collateral token on the Flare network.
- Keep a small amount of **FLR** in your wallet to cover gas fees - if not you will be prompted to swap some.
- If it's your _first_ trade, your wallet will ask you to **increase allowance** so the protocol can spend collateral token on your behalf. This is a one-time approval.

:::info Market size limit
For risk-management reasons, each trade (buy **or** sell) is capped at **10 % of the market's total liquidity**. If you try to enter an amount above that threshold, the app will automatically clamp it to the maximum allowed size.
:::

## Step-by-step: Buying shares

1. **Open a market** you're interested in (e.g. "Will the US unemployment rate for July 2025 be 4.0 % or higher?").
2. In the order panel on the right, switch to the **Buy** tab and select the outcome (Yes / No).
3. **Enter the amount** of collateral token you'd like to spend, or use **Max** to invest your full balance.
4. Review the **avg price**, **shares received**, and **potential return**.
5. Click **Buy**. A two-step modal will appear:
   1. **Increase allowance** – sign an approval transaction (only the first time).
   2. **Confirm transaction** – sign the buy transaction.
6. Wait a few seconds for the block to confirm. You'll see a **Congratulations!** dialog once the trade is executed.
7. Your new position now shows up below the chart, and your balance is updated.

:::tip
You can always **sell** your shares before market resolution. Switch to the **Sell** tab, enter the number of shares, and confirm the transaction.
:::

## Step-by-step: Selling shares

1. Navigate back to the **market page** where you hold a position.
2. In the order panel, switch to the **Sell** tab. The outcome you hold (Yes / No) is pre-selected.
3. **Enter the number of shares** you wish to sell, or click **Max** to liquidate the entire position.
4. Review the **avg price**, **Collateral received**, and **potential P/L**.
5. Click **Sell** and confirm the single on-chain transaction.
6. After a few seconds, you'll see a confirmation dialog. Your shares are burned and the proceeds are credited to your wallet.

:::tip
Need liquidity before resolution? Selling shares lets you exit early and lock in profits (or limit losses).
:::

<div style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '1.8216318785578747', padding: '40px 0' }}>
  <iframe src="https://app.supademo.com/embed/cmct3a5ra0v5p9st837c8qmue?embed_v=2" loading="lazy" title="Ignite Market ‑ Place a Trade" allow="clipboard-write" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
  </iframe>
</div>

