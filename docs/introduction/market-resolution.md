---
sidebar_position: 4
title: Market Resolution
---

# How are markets resolved?

IgniteMarket supports multiple resolution methods depending on the available validation sources.

## Flare Data Connector (FDC)

FDC enables trustless, automatic resolution for markets with verifiable data sources (e.g., sports results via APIs).

- **Predefined Rules:** Specifies APIs and consensus requirements (e.g., n APIs, k sources must match).
- **Dispute:** Users can challenge results by staking funds; if the dispute fails, the staked funds are forfeited.
- **Fallback Voting:** If consensus cannot be reached, social voting determines the outcome.
- **Open Participation:** Anyone can submit resolution data, increasing decentralization.
- **Failure Case:** If resolution still cannot be achieved, users may sell shares back to the liquidity pool until depleted.

## AI Resolution — Coming Soon

For markets without deterministic data sources, multiple AI models attempt to reach consensus.
Models analyze public data and vote based on predefined criteria.

- **Dispute:** Users can stake funds to challenge results, which may trigger social voting.
- **Fallback Voting:** Social voting finalizes results if AI consensus fails.

## Social Resolution

- **Community Voting:** Uses whitelisted addresses to vote on outcomes. Trusted community members can earn the privilege to become voters.
