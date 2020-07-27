# n8n-nodes-google-pubsub

This package provides nodes for [`n8n`](https://github.com/n8n-io/n8n) to work with [Google Pub/Sub](https://cloud.google.com/pubsub/docs).

## Installation

### In a local NPM installation

```bash
npm i n8n-nodes-google-pubsub
```

The nodes should be automatically discovered by `n8n`.

### In a global installation

```bash
npm i -g n8n-nodes-google-pubsub
```

You should then set the `N8N_CUSTOM_EXTENSIONS` variable to the path of the modules, e.g. on Ubuntu:

```bash
export N8N_CUSTOM_EXTENSIONS="/usr/local/lib/node_modules/n8n-nodes-google-pubsub"
```

### In a Docker image

You'll have to spin your own `Dockerfile` that builds from the official `n8n` image:


```Dockerfile
FROM n8nio/n8n

USER root

RUN npm_config_user=root npm install -g n8n-nodes-google-pubsub

ENV N8N_CUSTOM_EXTENSIONS "/usr/local/lib/node_modules/n8n-nodes-google-pubsub"

```

## Usage

### Credentials

The credentials are based on the standard Google credentials. The easiest way is to [setup a service account](https://docs.n8n.io/nodes/credentials/Google/#using-service-account) with the required permissions to work with Pub/Sub.

### Google Pub/Sub Trigger

This node will listen to message on a topic's subscription and trigger whenever a new message is coming.

#### Parameters

* Project Id.: Id. of the Google Cloud project bearing your Pub/Sub topics and subscriptions.
* Topic: Name of the Google Pub/Sub topic to listen to.
* Subscription: Name of the Google Pub/Sub subscription for this topic and node. It will be created if it doesn't exist.
* Decode JSON: If your message data is in JSON, enable this option to decode it automatically.

### Google Pub/Sub

> ⏳Coming soon: node to publish messages in a Pub/Sub topic.
