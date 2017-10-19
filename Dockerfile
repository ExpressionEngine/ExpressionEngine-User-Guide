FROM ubuntu:latest

# Usage:
# docker run --rm -it -v <your directory>:/docs/ <image name> make html

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y -q python-setuptools python-dev texlive texlive-latex-extra pandoc build-essential
RUN easy_install -U sphinx
RUN easy_install -U sphinxcontrib-phpdomain
RUN easy_install -U pygments-markdown-lexer

COPY eelexer /usr/local/eelexer
RUN cd /usr/local/eelexer && python setup.py install

RUN mkdir docs

WORKDIR /docs
VOLUME /docs

CMD ["/bin/bash"]
