import { createRoot } from "react-dom/client";
import { LinkGenerator } from "@jupyterhub/binderhub-react-components/LinkGenerator.jsx";
import { BuilderLauncher } from "@jupyterhub/binderhub-react-components/BuilderLauncher.jsx";
import { useEffect, useState } from "react";
import { Spec, LaunchSpec } from "@jupyterhub/binderhub-client/spec.js";

function LaunchUI({ providers, publicBaseUrl, baseUrl }) {
  const defaultProvider = providers[0];
  const [selectedProvider, setSelectedProvider] = useState(defaultProvider);
  const [repo, setRepo] = useState("");
  const [ref, setRef] = useState("");
  const [urlPath, setUrlPath] = useState("");
  const [isLaunching, setIsLaunching] = useState(false);
  const [spec, setSpec] = useState("");
  const [progressState, setProgressState] = useState(null);

  useEffect(() => {
    const encodedRepo = selectedProvider.repo.urlEncode
      ? encodeURIComponent(repo)
      : repo;
    let actualRef = "";
    if (selectedProvider.ref.enabled) {
      actualRef = ref !== "" ? ref : selectedProvider.ref.default;
    }
    setSpec(
      new Spec(
        `${selectedProvider.id}/${encodedRepo}/${actualRef}`,
        new LaunchSpec(urlPath),
      ),
    );
  }, [selectedProvider, repo, ref, urlPath]);

  return (
    <>
      <LinkGenerator
        className="bg-custom-dark p-4 pb-0 rounded-top"
        publicBaseUrl={publicBaseUrl}
        providers={providers}
        selectedProvider={selectedProvider}
        setSelectedProvider={setSelectedProvider}
        repo={repo}
        setRepo={setRepo}
        reference={ref}
        setReference={setRef}
        urlPath={urlPath}
        setUrlPath={setUrlPath}
        isLaunching={isLaunching}
        setIsLaunching={setIsLaunching}
      />
      <BuilderLauncher
        className="bg-custom-dark p-4 pt-2 rounded-bottom"
        baseUrl={baseUrl}
        spec={spec}
        isLaunching={isLaunching}
        setIsLaunching={setIsLaunching}
        progressState={progressState}
        setProgressState={setProgressState}
      />
    </>
  );
}

const PROVIDERS = [
  {
    "detect": {
      "regex": "^(https?://github.com/)?(?\u003crepo\u003e.*[^/])/?"
    },
    "displayName": "GitHub",
    "id": "gh",
    "ref": {
      "default": "HEAD",
      "enabled": true
    },
    "repo": {
      "label": "GitHub repository name or URL",
      "placeholder": "example: yuvipanda/requirements or https://github.com/yuvipanda/requirements",
      "urlEncode": false
    },
    "spec": {
      "validateRegex": "[^/]+/[^/]+/.+"
    }
  },
];
const BASE_URL = "https://mybinder.org";
const PUBLIC_BASE_URL = "https://mybinder.org";

const root = createRoot(document.getElementById("main"));
root.render(<LaunchUI
  providers={PROVIDERS}
  baseUrl={BASE_URL}
  publicBaseUrl={PUBLIC_BASE_URL}
/>);