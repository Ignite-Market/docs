---
sidebar_position: 4
title: Market resolution
---

# How are merkets resolved?

Ignite Market supports multiple resolution methods, depending on available validation sources.

## Flare Data Connector (FDC)

FDC provides trustless, automatic resolution for markets with clear data sources (e.g., sports results via APIs).
- **Predefined Rules:** Specifies APIs and consensus requirements (e.g., n APIs, k agreements).
- **Dispute:** Users can challenge results by staking funds; if the dispute fails, funds are forfeited.
- **Fallback Voting:** If consensus fails, social voting resolves the outcome.
- **Open Participation:** Anyone can contribute resolution data, enhancing decentralization.
- **Failure Case:** If resolution fails, users can sell shares back to the liquidity pool until it’s empty.

## AI Resolution - Comming

For markets lacking deterministic sources, multiple AI models seek consensus.
Models analyze public data and vote based on predefined criteria.

- **Dispute:** Users can stake funds to challenge results, triggering social voting if needed.
- **Fallback Voting:** Social voting finalizes outcomes if AI consensus fails.

## Social Resolution

- **Community:** Uses whitelisted addresses to vote on outcomes. Trusted community members can earn the privilege to become voters.