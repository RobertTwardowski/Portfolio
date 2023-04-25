import React from 'react'
import { DataProjects } from '../../Data/Data'
import {
  Wrapper,
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerDown,
  ContainerUp
} from './Projects.styles'
export const Projects = () => {
  return (
    <Wrapper>
      {DataProjects.map(project => (
        <Container key={project.id}>
          <ContainerLeft photo={project.photo} ></ContainerLeft>

          <ContainerRight>
            <ContainerUp>
              <h2>{project.name}</h2>
              <p>{project.about}</p>
            </ContainerUp>
            <ContainerDown>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                Zobacz projekt
              </a>
              <a href={project.code} target='_blank' rel='noopener noreferrer'>
                Zobacz Kod
              </a>
            </ContainerDown>
          </ContainerRight>
        </Container>
      ))}
    </Wrapper>
  )
}
