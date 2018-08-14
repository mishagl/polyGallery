# polyGallery
Image gallery implementation with Polymer 3

Exploring the features of Polymer Project v3: element teplates, lazy loading, events, sorint and filtering.
https://www.polymer-project.org/

Please use the latest version of Chrome or Safari to view the app. It uses native [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import).

If you have done all this before:

```
npm install -g polymer-cli
git clone https://github.com/mishagl/polyGallery.git
cd polyGallery
npm install
polymer serve
```

Otherwise: 

  1.  [Set up a development environment for Polymer projects](#setup):
        * [Install Polymer CLI prerequisites](#installprerequisites).
        * [Install Polymer CLI](#installcli).
  2.  [Clone, install and serve the `polyGallery` project locally](#clone).
  3.  (Optional) [Build the `polyGallery` project for production](#build).

<a name="setup"></a>

## Set up a development environment for Polymer projects

Before you can serve this project, you will need to install Polymer CLI
and its prerequisites.

<a name="installprerequisites"></a>

### Install Polymer CLI Prerequisites

* [Git](https://git-scm.com/download/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

<a name="installcli"></a>

### Install Polymer CLI

When you've installed the prerequisites, run the following command to install the Polymer CLI globally:

```
npm install -g polymer-cli
```

<a name="clone"></a>

## Clone, install and serve the start-polymer3 project locally

To clone the project, install its dependencies, and serve locally:

```
git clone https://github.com/mishagl/polyGallery.git
cd polyGallery
npm install
polymer serve
```

To view the app, open the `applications` link in the latest version of Chrome or Safari. For example:

```
~/polyGallery > polymer serve
info:    Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8081
      reusable components: http://127.0.0.1:8081/components/polyGallery/
```

In the example above, you'd open http://127.0.0.1:8081.

<a name="build"></a>

## Build the polyGallery project for production

To build the `polyGallery` app: 

```
npm install
polymer build
```

The build is output to `build/default`. To serve the built app locally:

```
polymer serve build/default
```
